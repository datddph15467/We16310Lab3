import Navigo from "navigo";
import dashBroad from "./page/dashbroad";
import newsAdd from "./page/news-add";
import newsEdit from "./page/news-edit";
import news from "./page/news";
import signIn from "./page/signin";
import signUp from "./page/signUp";
import newDetail from "./page/newDetail";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
}
router.on({
    "/": () => {
        print(dashBroad.render());
    },
    "/news": () => {
        print(news.render());
    },
    "/newsAdd": () => {
        print(newsAdd.render());
    },
    "/newsEdit": () => {
        print(newsEdit.render());
    },
    "/signIn": () => {
        print(signIn.render());
    },
    "/signUp": () => {
        print(signUp.render());
    },
    "/news/:id": (value) => {
        print(newDetail.render(value.data.id));
    },
});
router.notFound(() => print(notFoundPage.render()));
router.resolve();