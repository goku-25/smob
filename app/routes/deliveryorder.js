import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.controllerFor('deliveryorder').set('ShowingModalrequest', false);
      
        this.controllerFor('deliveryorder').set('delivertocompany', null);
        this.controllerFor('deliveryorder').set('address', null);
        this.controllerFor('deliveryorder').set('item', null);
        this.controllerFor('deliveryorder').set('Quantity', null);
        this.controllerFor('deliveryorder').set('formdate', null);
    
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from do:' +requestid);
        this.controllerFor('deliveryorder').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('deliveryorder').set('usertype', usertype);

      var  isShowdeliveryorder=this.controllerFor('history').get('isShowdeliveryorder' );
      console.log('isShowdeliveryorder' +isShowdeliveryorder);
      this.controllerFor('deliveryorder').set('isShowdeliveryorder', isShowdeliveryorder);

      var  isshowbutton=this.controllerFor('history').get('isshowbutton' );
      console.log('isshowbutton' +isshowbutton);
      this.controllerFor('deliveryorder').set('isshowbutton', isshowbutton);

      var  isShow=this.controllerFor('history').get('isShow' );
      console.log('isShow' +isShow);
      this.controllerFor('deliveryorder').set('isShow', isShow);

      
    }
});
