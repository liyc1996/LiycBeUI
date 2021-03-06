var LiycBeUI_Catalog_item={
	name:'nav-item',
	template:'<li class="lb-nav-item"  v-on:click="showCitem">\
					<a class="lb-nav-title" :id="item.title" :id="index">\
						<div class="logo">&nbsp;</div>\
						<div class="text">{{item.title}}</div>\
					</a>\
					<ul class="lb-nav-citem">\
						<li v-if="check(item.citems)" v-for="(citem,rindex) in item.citems" class="" >\
							<a class="lb-nav-title" :id="getIndex(rindex)">\
							<div class="logo">&nbsp;</div>\
							<div class="text1">{{citem}}</div>\
							</a>\
						</li>\
						<nav-item v-if="!check(item.citems)" v-for="(citem,index) in item.citems" :index="getIndex(index)" :item="citem"></nav-item>\
					</ul>\
			</li>',
	props:['item','index'],
	methods:{
		showCitem:function(e){
			var t=e.target||e.srcElement,
				target=e.currentTarget,
				item=target.getElementsByTagName('ul')[0],
				index=item.getAttribute("index"),
				cur=this.item;
				if(t.className=="text"){
					if(cur.flag){
						item.style.cssText="display:block";
						cur.flag=false;
					}
					else{
						item.style.cssText="display:none";
						cur.flag=true;
					}
				}
				e.stopPropagation()
		},
		check:function(a){
			if(a.toString().indexOf('[object Object]')==-1){
				return true;
			}
			else{
				return false;
			}
		},
		getIndex:function(index){
			return this.index+'-'+index;
		}
	}
}
var LiycBeUI_Catalog={
	template:'<ul class="lb-nav">\
				<nav-item v-for="(item,index) in items"  :index="index" :item="item">\
				</nav-item>\
			</ul>',
	props:['items'],
	components:{
		"nav-item":LiycBeUI_Catalog_item
	}

};
