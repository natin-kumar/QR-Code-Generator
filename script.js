const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    const input= document.getElementById('input');
    const image= document.getElementById('image');
    if(input.value.length>0)
        {

            image.style.display="block";
            image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value} `;
        }
})