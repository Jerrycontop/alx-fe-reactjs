import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Recipe Sharing App</h1>

        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar /> 
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
