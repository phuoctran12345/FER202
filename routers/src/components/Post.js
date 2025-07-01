import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';

function Post() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3000/posts');
                if (!response.ok) {
                    throw new Error(`Lỗi HTTP! Status: ${response.status} - ${response.statusText}`);
                }
                const contentType = response.headers.get('Content-Type');
                if (!contentType || !contentType.includes('application/json')) {
                    const text = await response.text();
                    console.error('Phản hồi không phải JSON:', text);
                    throw new Error('Phản hồi từ server không phải JSON');
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <div className="mt-4">
            <h2 className="mb-4">Danh sách bài viết</h2>
            <div className="list-group">
                {posts.map(post => (
                    <Link
                        key={post.id}
                        to={`/post/${post.id}`}
                        className="list-group-item list-group-item-action"
                    >
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{post.title}</h5>
                            <small>Tác giả: {post.author}</small>
                        </div>
                        <p className="mb-1">{post.content.substring(0, 100)}...</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Post;