// Дэлгэцтэй ажиллах контроллер
var uiController = (function()
{
  

})();
// Санхүүтэй ажиллах контроллер
var financeController = (function()
{

})();
// программын холбогч контроллер
var appController = (function(uiCtrl,fnCtrl)
{
    var ctrlAdditem =function()
    {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авах
        console.log("Дэлгэцнээс өгөгдлөө авах хэсэг");
       // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт  дамжуулж тэнд хадгална
       // 3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана  
       // 4. Төсвийг тооцно
       // 5. Эцсийн үлдэгдлийг тооцно
    }

   document.querySelector('.add__btn').addEventListener('click',function(){
       
     


   })
//    Товчлуур эвент
document.addEventListener('keypress',function(event){
    if(event.keyCode===13)
    {
        ctrlAdditem();
    }
   
})

})(uiController,financeController);