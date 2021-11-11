

var inPage = new Vue (
    {
        el: "#main-page",
        data:{
            slidePos: 0,
            slide:[
                {
                    items:"img/01.jpg",
                    title:"Svezia",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
                },
                {
                    items:"img/02.jpg",
                    title:"Svizzera",
                    text:"Lorem ipsum",
                },
                {
                    items:"img/03.jpg",
                    title:"Gran Bretagna",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                },
                {
                    items:"img/04.jpg",
                    title:"Germania",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
                },
                {
                    items:"img/05.jpg",
                    title:"Paradise",
                    text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
                },
            ],
        },
        methods:{
            bef: function() {
                if(this.slidePos == 0){
                    this.slidePos = this.slide.length - 1;
                }else{
                    --this.slidePos;
                }
            },
            nex: function() {
                if(this.slidePos == this.slide.length - 1){
                    this.slidePos = 0;
                }else{
                    this.slidePos++;
                }
            }, 
        }
    }
);
