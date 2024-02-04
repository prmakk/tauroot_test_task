import ArticleItem from './components/Article/ArticleItem';
import AsideLinks from './components/AsideLinks/AsideLinks';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader';
import TopHeader from './components/TopHeader';
import './styles/css/main.css'

function App() {
    return (
        <div className='app'>
            <AsideLinks/>
            <TopHeader />
            <MainHeader />
            <ArticleItem />
            <Footer />
        </div>
    );
}

export default App;
