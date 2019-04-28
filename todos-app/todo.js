const ps=document.querySelectorAll('p')
const removePThePs= function () {
    ps.forEach((p)=>{
        p.textContent.toLocaleLowerCase().includes("the")?p.remove():p
    })
}
removePThePs()