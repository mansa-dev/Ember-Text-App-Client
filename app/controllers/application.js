import Ember from 'ember';

export default Ember.Controller.extend({
  textValue : null,

  actions : {
    save(){
      var self = this;
      if(Ember.isBlank(self.get('textValue'))){
        alert("Can't save blank message.");return;
      }

      if(self.get('textValue').length >= 160){
        alert("Can't save more than 160 characters."); return;
      }

      var message = self.store.createRecord('text',{
        text: self.get('textValue')
      });

      message.save().then(function(){
        self.set('textValue',null)
        alert('Saved');
      })
      .catch(function(e){
        self.set('textValue',null);
        alert('Server Error');
        message.deleteRecord();
      });
    }
  }
});
