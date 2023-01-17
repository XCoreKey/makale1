import { useComment } from '../context/CommentsContext';
import validationSchema from './validations';
import { useFormik } from 'formik';

function Comments() {
  
  const {comments, setComments} = useComment()

  const {handleSubmit, handleChange,  values , errors } = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: (values, {resetForm}) => {

      setComments(() => [ ...comments, { comments: values.comment }]);
      
      resetForm({
        values: {
          comment : ''
        }
      })
    },
    validationSchema,
  });


  return (
    <div>		
  <form onSubmit={handleSubmit}>
	<input style={{width: "50%", fontSize: "31px"}} name="comment" value={values.comment} onChange={handleChange} />
	<div class="message"></div>
  <button className="gradient-button gradient-button-1">yorum yap</button>

    <br />
    <strong style={{'color': 'red'}}>{errors.comment}</strong>

  </form>
  </div>
  )
}

export default Comments