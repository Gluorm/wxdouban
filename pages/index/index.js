import { network } from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    // wx.request({
    //   url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=6',
    //   success:(res)=>{
        
    //     console.log(res);
    //     var movies = res.data.subject_collection_items
    //     that.setData({
    //       movies:movies
    //     })
        
        
    //   }
    // })

    network.getMovieList({
      success:function(movies){
        that.setData({
          movies:movies
        })
      }
    }),


      network.getTVList({
        success:function(tvh){
          that.setData({
            tvh:tvh
          })
        }
      }),

      network.getTvvsList({
        success:function(tvvs){
          that.setData({
            tvvs:tvvs
          })
        }
      })





    // wx.request({
    //   url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?count=6',
    //   success: (res) => {

    //     console.log(res);
    //     var tvh = res.data.subject_collection_items
    //     that.setData({
    //       tvh: tvh
    //     })


    //   }
    // }),
    //   wx.request({
    //   url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=6',
    //     success: (res) => {

    //       console.log(res);
    //       var tvvs = res.data.subject_collection_items
    //       that.setData({
    //         tvvs: tvvs
    //       })


    //     }
    //   })



  


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})