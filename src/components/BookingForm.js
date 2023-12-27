import React from 'react'
import { useFormik} from 'formik';
import * as Yup from 'yup';

const today = new Date()
const yesterday = new Date(today)
const currentHour = today.getHours() + ":" + today.getMinutes()


yesterday.setDate(yesterday.getDate() - 1)
console.log(currentHour)
const ReservarionSchema = Yup.object().shape({
  date: Yup.date()
    .min(yesterday)
    .required('Required'),
    time: Yup.string()
     .required()
     .oneOf(["17:00","18:00","19:00","20:00","21:00","22:00"])
     .label("Choose time"),
     guests: Yup.number().min(1,"number minimum of guest is 1").max(10,"number maximum of guest is 10").required('Required'),
    name:Yup.string().required('Required'),
    occasion:Yup.string()
    .required()
    .oneOf(["Birthday", "Anniversary"])
    .label("Select a occasion"),
 });

export const BookingForm = ({submit}) => {


    const formik = useFormik({
         initialValues: {
           date: "",
           time: '',
           guests: 0,
           name:'',
           occasion:'Select a occasion'
          },
          onSubmit: value => {
            submit(value)
            formik.resetForm()
        },
          validationSchema:ReservarionSchema
        });
  return (
    <form className='reservation-form' onSubmit={ formik.handleSubmit}>

         <label htmlFor="date">Choose date</label>
         <input
            type="date" 
            id="date"
            onChange={formik.handleChange} 
            value={formik.values.date} 
            onBlur={formik.handleBlur}
        />

        {
            formik.errors.date &&  formik.touched.date && <span className='error'>{formik.errors.date}</span>
        }

         <label htmlFor="time">Choose time</label>
         <select id="time"
            onChange={formik.handleChange} 
            value={formik.values.time} 
            onBlur={formik.handleBlur}
         >
             <option>Select a hour</option>
             <option>17:00</option>
             <option>18:00</option>
             <option>19:00</option>
             <option>20:00</option>
             <option>21:00</option>
             <option>22:00</option>
         </select>
         {
            formik.errors.time && formik.touched.time && <span className='error'>{formik.errors.time}</span>
        }

         <label htmlFor="guests">Number of guests</label>
         <input type="number" placeholder="1" id="guests"
                        onChange={formik.handleChange} 
                        value={formik.values.guests} 
                        onBlur={formik.handleBlur}

         />

        {
            formik.errors.guests && formik.touched.guests && <span className='error'>{formik.errors.guests}</span>
        }
         <label htmlFor="occasion">Occasion</label>
         <select id="occasion"
            onChange={formik.handleChange} 
            value={formik.values.occasion} 
            onBlur={formik.handleBlur}

         >
             <option defaultChecked>Select a occasion</option>
             <option>Birthday</option>
             <option>Anniversary</option>
         </select>

         {
            formik.errors.occasion && formik.touched.occasion && <span className='error'>{formik.errors.occasion}</span>
        }

        <label htmlFor="name">Your name</label>
        <input type="text" id='name' placeholder='Juan Ramirez' 
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                        onBlur={formik.handleBlur}
        />
         {
            formik.errors.name && formik.touched.name &&  <span className='error'>{formik.errors.name}</span>
        }
         <input type="submit" role="button" disabled={!(formik.isValid && formik.dirty)} value="Make Your reservation"/>

    </form>
  );
}

