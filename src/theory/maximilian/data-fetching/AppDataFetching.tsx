import BlogPosts, { BlogPost } from './components/BlogPosts';
import ErrorMessage from './components/ErrorMessage';
import {get} from './util/http';
import {useState, useEffect} from 'react'

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function AppDataFetching() {
  const [fetchedPost, setPosts] = useState<BlogPost[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const imgUrl = '/assets/data-fetching.png'

  useEffect(() => {
   async function getData () {
    setLoading(true)
     try {
       const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[]
       const blogPosts:BlogPost[]  = data.map(post => (
        {
          id: post.id,
          title: post.title,
          text: post.body
        }))       
        setPosts(blogPosts)         
     } catch (error) {
        if(error instanceof Error) {
          setError(error.message)
        }
     }
     setLoading(false)
    }

    getData();
  },[])

  let content: React.ReactNode;

  if (loading) {
    content = <p id='loading-fallback'>Loading...</p>
  }
  if (error) {
    content = <ErrorMessage text={error} />
  }
  if (fetchedPost) {
    content = <BlogPosts posts={fetchedPost}/>
  }

  return <main>
    <img src={imgUrl} alt='some desc' />
    <ul>
      {content}
    </ul>
  </main>;
}

export default AppDataFetching;
