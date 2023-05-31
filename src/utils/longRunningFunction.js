export default function myLongRunningFunction() {
  setTimeout(()=>{
    for (let i=0; i<40000; i++) {
      console.log(i);
    }
  }, 20)
}