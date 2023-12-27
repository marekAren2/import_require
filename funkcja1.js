function udajeExpress() {
    const router = {
        get: (get) => {
            console.log('get',get)
            
        },
        
        post: (post) => {
            console.log('post',post)
            
        },
    };
    return {
        // nie ma klamry w cb bo musialby byc return ?
        // brak klamry w domysle return?
        Router: () => router
    }

}