import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const reset = () => {
        setErrors([]);
        setPage(1);
        setHasMore(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.trim().length === 0) {
            setErrors(["Search field can't be empty!"]);
            return;
        }

        try {
            setLoading(true);
            const data = await fetchUserData({username, location, minRepos, page});
            if (data.items.length < 6) setHasMore(false);
            setSearchResults(data.items);
            reset();
        } catch (error) {
            setErrors(prev => [...prev, "Looks like we cant find the user"]);
        }
        setLoading(false);
    };

    const loadMore = async () => {
        setLoading(true);
        try {
            const nextPage = page + 1;
            const data = await fetchUserData({username, location, minRepos, page: nextPage});
            setSearchResults(data.items);
            setPage(nextPage);

            const usersNum = data.items.length;
            if (usersNum % 6 === usersNum ) setHasMore(false);
        } catch (error) {
            setErrors(prev => [...prev, "Error loading more results"]);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Search GitHub usernames"
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            placeholder="Location (optional)"
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
                        <input
                            type="number"
                            value={minRepos}
                            onChange={e => setMinRepos(e.target.value)}
                            placeholder="Minimum Repositories (optional)"
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                        >
                            Search
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                reset();
                                setSearchResults([])
                                setUsername('');
                                setLocation('');
                                setMinRepos('');
                            }}
                            className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </form>
            <ul className="mt-4">
                {errors.length > 0 &&
                    errors.map((error, i) => (
                        <li className="text-red-500" key={i}>{error}</li>
                    ))
                }
            </ul>
            <div className="mt-6">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    searchResults.map((user, i) => <UserCard key={i} data={user} />)
                )}
                {hasMore && !loading && (
                    <button
                        onClick={loadMore}
                        className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                    >
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
}

export default Search;

function UserCard({ data }) {

    if (!data) return null;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-auto my-4">
            <div className="flex items-center p-4">
                <img
                    src={data.avatar_url}
                    alt={data.login}
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">{data.login}</h2>
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub Profile
                    </a>
                </div>
            </div>
            <div className="bg-gray-100 p-4">
                <p className="text-gray-600 text-sm">
                    <strong>Public Repos:</strong> {data.public_repos}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Public Gists:</strong> {data.public_gists}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Followers:</strong> {data.followers}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Following:</strong> {data.following}
                </p>
            </div>
        </div>
    );
}