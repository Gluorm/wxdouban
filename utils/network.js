import {globalUrls} from "urls.js"

const network ={
  getMovieList:function(params){
    params.type = "movie";
    this.getItemList(params);
  },
  getTVList: function (params){
    params.type = "tvh";
    this.getItemList(params);
  },
  getTvvsList:function(params){
   params.type = "show";
   this.getItemList(params);
  },


  //--------------------------------------------------------------
  getItemList:function(params){
    var url = "";
    if(params.type==="movie"){
      url = globalUrls.movieList;
    } else if (params.type === "tvh"){
      url = globalUrls.lvList;
    }else{
      url = globalUrls.showList;
    }

    var count = params.count ? params.count:6
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: (res) => {

        console.log(res);
        var item = res.data.subject_collection_items;
        var itemcount = item.length;
        var left = itemcount%3;
        if(left === 2){
          item.push(null);
        }


        if (params && params.success) {
        var item = res.data.subject_collection_items
          params.success(item)
        }


      }
    })
    
  },
  // -------------------------------需求数据
  getItemDetail:function(params){
    var type = params.type;
    var id = params.id;
    var url = "";

    if(type==="movie"){
      url = globalUrls.movieDetail + id
    }else if(type==="tv"){
      url = globalUrls.tvDetail + id
    }else{
      url = globalUrls.showDetail + id
    }

    wx:wx.request({
      url: url,
      success:function(res){
        console.log(res)
        var item = res.data
        if(params.success){
          
          params.success(item)
        }
      }
    })
  },


  // -------------------------------  标签数据
  getItemTags:function(params){
    var type = params.type;
    var id=params.id;
    var url = "";
    if(type==="movie"){
      url = globalUrls.movieTags(id);
    }else if(type==="tv"){
      url = globalUrls.tvTags(id);
    }else{
      url = globalUrls.showTags(id);
    }

    wx.request({
      url: url,
      success:function(res){
        var tags=res.data.tags;
        if(params.success){
          params.success(tags);
        }
      }
    })
  },
  
  //=========================================评论数据
  getItemComments:function(params){
    var type = params.type;
    var id = params.id;
    var start = params.start?params.start:0;
    var count = params.count?params.count:3;
    var url="";
    if(type==="movie"){
      url=globalUrls.movieComments(id,start,count);
    }else if(type==="tv"){
      url = globalUrls.tvComments(id, start, count);
    }else{
      url = globalUrls.showComments(id, start, count);
    }
    wx.request({
      url: url,
      success:function(res){
        var data = res.data;
        if(params.success){
          params.success(data);
        }
      }
    })
  },
  

  getItemsearch:function(params){
    var p =params.p;
    var url = globalUrls.searchFor(p);
    wx.request({
      url:url,
      success:function(res){
        var searchdata = res.data.subjects;
        if(params.success){
          params.success(searchdata);
        }
      }
    })
    
  }







}


export{network}