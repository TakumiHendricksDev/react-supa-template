import { supabase } from '../db/supabase'
import {useEffect, useState} from "react";
import Post from "./Post.tsx";

export default function Posts() {
    const [posts, setPosts] = useState([])

    async function fetchPosts() {
        const { data, error } = await supabase.from('posts').select('*')
        if (error) {
            console.log('Error fetching posts:', error)
        }
        else {
            // @ts-ignore
            setPosts(data)
        }
    }
    useEffect(() => {
        fetchPosts().then(_ => console.log('posts fetched'))
    }, [])
    const postItems = posts.map(({id, title}) =>
        <Post id={id} title={title} />
    );

    return (
        <>
            <div className="flex flex-col gap-2">
                {postItems}
            </div>
        </>
    );
}