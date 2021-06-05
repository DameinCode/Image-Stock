import './App.css';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout"
import PhotoPage from "./containers/PhotoPage/PhotoPage";
import Home from "./containers/Home/Home";
import LikedImages from "./components/LikedImages/LikedImages";
import SearchHistory from "./components/SearchHistory/SearchHistory";

function App() {
  return (
      <Layout>
          <Switch>
              <Route path="/photo-page/:id" exact component={PhotoPage} />
              <Route path="/liked-images" exact component={LikedImages}></Route>
              <Route path="/search-history" exact component={SearchHistory}></Route>
              <Route path="/" exact component={Home} />
              <Redirect to="/" />
          </Switch>
      </Layout>
  );
}

export default withRouter(App);
