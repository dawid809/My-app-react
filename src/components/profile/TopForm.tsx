import React , { FC } from 'react';
import { useFormik } from 'formik';

export const TopForm: FC = () => {

    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text"/>
                <label>CompanyName</label>
                <input type="text"/>
                {/* <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/> */}


                <button>Submit</button>
            </form>
        </div>
    )
}