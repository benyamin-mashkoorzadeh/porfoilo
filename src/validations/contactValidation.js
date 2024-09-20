import * as Yup from 'yup'


export const contactValidationSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامی می باشد'),
    email: Yup.string().email('آدرس ایمیل معتبر نمی باشد').required('آدرس ایمیل الزامی می باشد'),
    subject: Yup.string().required('عنوان ایمیل الزامی می باشد'),
    message: Yup.string().required('متن ایمیل الزامی می باشد'),
    recaptcha: Yup.string().required('کپتچا الزامی می باشد'),
})