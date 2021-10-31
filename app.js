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
        },
        addlistitem:function(item,type)
        {
            var html,list;
            if(type==='inc')
            {
                list='.income__list';
                html='   <div class="item clearfix" id="income-%id%"><div class="item__description">$$desc$$</div><div class="right clearfix"><div class="item__value">$$value$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div> </div>';
            }
            else
            {
                list='.expenses__list'
                html='<div class="item clearfix" id="expense-%id%"><div class="item__description">$$desc$$</div><div class="right clearfix"> <div class="item__value">$$value$$</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
           html= html.replace("%id%",item.id); 
           html=html.replace("$$desc$$",item.description);
           html=html.replace("$$value$$",item.value);
           document.querySelector(list).insertAdjacentHTML("beforeend",html);
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

    //private
    var data = 
    {
        allitems:{
            inc:[],

            exp:[]
        },

        totals:
        {
            inc:0,
            exp:0
        }
 
    };
    return{
     addItem: function(type,desc,val)
   {
     console.log('Adding item');
     var item,id;
    if(data.allitems[type].length===0) id=1;
    else{id=data.allitems[type][data.allitems[type].length-1].id+1;}
     if(type==='inc')
     {
         item=new orlogo(id,desc,val);
     }
     else
     {
         item=new zarlaga(id,desc,val);
     }
     data.allitems[type].push(item)
     return item;
   },
   seedata:function()
   {
       return data; 
   }
}

    
})();
// программын холбогч контроллер
var appController = (function(uiController,financeController)
{
    
    var ctrlAdditem =function()
    {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авах
        //1.1 Дэлгэцэнээс өгөгдлийг уншаад хувьсагчид хадгалж байНА.
        var input=uiController.getIntput();
        console.log(input);
          // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт  дамжуулж тэнд хадгална
       var item= financeController.addItem(input.type,input.description,input.value);

     
       // 3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана  
       uiController.addlistitem(item,input.type);
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