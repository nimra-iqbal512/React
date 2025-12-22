import { useRef, useEffect } from "react";

const Box = () => {
    const ref = useRef(null);

    useEffect(()=>{
        const div = ref.current;
        // IntersectionObserver sees either element is visible on the screen
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            if(entry.isIntersecting){  // entry.inIntersecting return 'true' when elenent is visible accordig to the threshold
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
            } else {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            }
        }, {
            threshold: 1.0 // threshold: 1.0 says that 100% of the box must be visible. That's why bg changes when 100% of box is visible
        });
        observer.observe(div);
        return ()=>{
            observer.disconnect();
        }
    }, []);
  return (
    <div ref={ref} style={{
        margin: 20,
        height: 100,
        width: 100,
        border: '2px solid black',
        backgroundColor: 'blue'
    }}></div>
  )
}
export default Box