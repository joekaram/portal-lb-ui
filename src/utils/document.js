export default {
    setDocumentTitle: route => {
        if(!(route.meta && route.meta.title && route.meta.title.length))
            return;
            
        document.title = route.meta.title;
    },
    setMetaTags: route => {
        if(!(route.meta && route.meta.metaTags))
            return;

        route.meta.metaTags.forEach(tagDefinition => {
            let tag = document.createElement("meta");
            Object.keys(tagDefinition).forEach(key => {
                tag.setAttribute(key, tagDefinition[key]);
            });
            document.head.appendChild(tag);
        });

    }
};