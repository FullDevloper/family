// Дэлгэцтэй ажиллах контроллер
var uiController = (function()
{
  var htmlSan={
      temdeg:".add__type",
      tailbar:".add__description",
      dun_utga:".add__value",
      

    }
    var clck={
        addbtn:".add__btn"
    }
   
    return {
        getIntput: function()
        {
            return {
                type:document.querySelector(htmlSan.temdeg).value,
                description: document.querySelector(htmlSan.tailbar).value,
                value: document.querySelector(htmlSan.dun_utga).value
            };
        },
        gethtmlsan: function()
        {
                return clck;
        }
    };


    
     
   
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function()
{
    var orlogo = function(id,description,value)

    {
        this.id=id;
        this.description=description;
        this.value=value;
        

    }
    var zarlaga =function(id,description,value)
    {
        this.id=id;
        this.description=description;
        this.value=value;

    }
    var orlogohadgalah=[];
    var zarlagahadgalah=[];
    var totalorlogo=0;
    var totalzarlaga=0;
    var data = function()
    {
        allitems:{
            orlogo1:[],

            zarlaga:[];
        },

        totals:
        {
            or:100,
            zar:0
        }
    }
})();
// программын холбогч контроллер
var appController = (function(uiController,financeController)
{
    
    var ctrlAdditem =function()
    {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авах
      console.log(uiController.getIntput());

       // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт  дамжуулж тэнд хадгална
       // 3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана  
       // 4. Төсвийг тооцно
       // 5. Эцсийн үлдэгдлийг тооцно
    };

 

    var setupEventlistener = function()
    {
        var dom = uiController.gethtmlsan();
        document.querySelector(dom.addbtn).addEventListener('click',function(){
           
      
            ctrlAdditem();
    
       });
    
        //    Товчлуур эвент
        document.addEventListener('keypress',function(event){
            if(event.keyCode===13 || event.which===13)
            {
                ctrlAdditem();
            }
           
        });
  
      
    
    };
    return {
        init:function()
        {
            setupEventlistener();
        }
    }





})(uiController,financeController);


 
 appController.init();