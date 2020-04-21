import { FormValidationRule } from '../../types';
import  Text from '../Text';
import * as React from 'react';
import { FieldFeedback, FieldFeedbacks, Input } from 'react-form-with-constraints-bootstrap4';

interface EmailInputProps {
    id: string;
    name: string;
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

    emailUsed: boolean;  // Set to true to trigger ErrMessage
    emailUsedErrorMessage: string;  // Tell the User that this email is already taken
    rules: FormValidationRule[];

    // Notifies the parent element when a validation rule's status changes
    validationCallback?: (rule: FormValidationRule, shown: boolean) => void;
}

const EmailInput = (props: EmailInputProps) => {
    return (
        <div className="form-group">
            <Input
                autoComplete="false"
                type="email"
                id={props.id}
                name={props.name}
                className={`form-control icase-field ${props.emailUsed ? 'is-invalid' : ''}`}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onChange}
                required={true}
            />

            <label className={`form-control-placeholder ${props.value.length > 0 ? 'dirty' : 'pristine'}`} htmlFor={props.name}>
                <Text field={props.label} />
            </label>

            <div id="emailErrorMsg">
                <FieldFeedbacks for={props.id} stop="no">
                {props.emailUsed &&  <p>
                        <FieldFeedback when="*" >
                            <span>{props.emailUsedErrorMessage}</span>
                        </FieldFeedback>
                    </p>
                    }
                    {props.rules && (
                        props.rules.map((child: FormValidationRule, index: number) => (
                            <p key={index} id={`emailRule${index}`}>
                                <FieldFeedback
                                    key={index}
                                    when={(value) => {
                                        const show = !(new RegExp('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$', 'g')).test(value);
                                        if (props.validationCallback) {
                                            props.validationCallback(child, show);
                                        }
                                        return show;
                                    }}
                                    error={true}
                                >
                                    <p>error</p>
                                </FieldFeedback>
                            </p>
                        )))}
                </FieldFeedbacks>
            </div>
        </div>
    );
};

export default EmailInput;