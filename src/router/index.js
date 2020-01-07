import Vue from "vue";
import Router from "vue-router";
import Document from "@/utils/document";

import TestPage from "@/views/TestPage";
import NotFoundPage from "@/views/NotFoundPage";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        /* ========== GUEST ROUTES ========== */
        {
            path: "/",
            name: "test-page",
            component: TestPage,
            meta: { 
                requiresAuth: false,
                title: "Test Page | Provider",
                metaTags: [
                    { name: "description", content: "This is the description of the test page." },
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
