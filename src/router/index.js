import Vue from "vue";
import Router from "vue-router";
import Document from "@/utils/document";

import WelcomePage from "@/views/WelcomePage";
import NotFoundPage from "@/views/NotFoundPage";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        /* ========== GUEST ROUTES ========== */
        {
            path: "/",
            name: "welcome-page",
            component: WelcomePage,
            meta: { 
                requiresAuth: false,
                title: "Welcome | Portal LB",
                metaTags: [
                    { name: "description", content: "Welcome to Portal LB!" },
                ]
            }
        },
        
        /* ========== AUTH ROUTES ========== */
        // {
        //     path: "/path",
        //     name: "name",
        //     component: Component,
        //     meta: { requiresAuth: true }
        // }

        /* ========== OTHER ROUTES ========== */
        {
            path: "/**",
            name: "notfound-page",
            component: NotFoundPage,
        }
    ]
});

router.afterEach(to => {
    Document.setDocumentTitle(to);
    Document.setMetaTags(to);
});

export default router;
