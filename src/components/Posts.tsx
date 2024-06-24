import { supabase } from '../db/supabase'
import {useEffect, useState} from "react";

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
        <div key={id}>
            <h1>Post {title}</h1>
        </div>
    );

    return (
        <>
            {postItems}
        </>
    );
}