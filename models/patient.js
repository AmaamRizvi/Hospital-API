const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    
  phone: {
      type: Number,
      maxlength:10,
      required: true,
      unique:true,
  },
  name: {
      type: String,
      required:true,
  },
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Doctor'
  }//ye q le rkha? report dr krega register too khud se hi kran jis doc k pass ptn ka registration hoga uska naam aayega us ptn k saath isme esha kahi ni lkikah chor do isko resgistraion me name nad phone rhega
}, {
    timestamps: true
  });


const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;