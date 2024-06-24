import Navigation from "./components/Navigation.tsx";
import Posts from "./components/Posts.tsx";

function App() {
  return (
    <>
        <Navigation />
        <div className="p-4">
            <Posts />
        </div>
    </>
  )
}

export default App
