import { useState, useEffect } from "react";

const useIntersectionObserver = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        console.log('Hi');
        
        const div = ref.current;
        // IntersectionObserver sees either element is visible on the screen
        const observer = new IntersectionObserver(entries => {
            console.log('==Hi');
            const entry = entries[0];
            setIsIntersecting(entry.isIntersecting);
        }, {
            threshold: 1.0 
        });
        observer.observe(div);
        return () => {
            observer.disconnect();
        }
    }, [ref]);

    return isIntersecting;
}
export default useIntersectionObserver