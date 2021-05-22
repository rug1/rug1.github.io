import React, { useState } from 'react'
import {
  SubscribeFooter,
  SubscribeForm,
  SubscribeText,
  SubscribeInput,
  SubscribeButton
} from '../styledComponents/subscribe';

export const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value)
    } else if (name === 'email') {
      setEmail(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    const ADD_CONTACT_URL = 'https://api.sendinblue.com/v3/contacts';
    const ADD_TO_LIST_URL = 'https://api.sendinblue.com/v3/contacts/lists/3/contacts/add';

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': '',
    }

    try {
      await fetch(ADD_CONTACT_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email,
          attributes: { FIRSTNAME: name }
        })
      })
        
      await fetch(ADD_TO_LIST_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          emails: [email],
        })
      })

      setIsLoading(false)
      setIsSuccessful(true)
    } catch (e) {
      setIsLoading(false)
    }
  }

  if (isSuccessful) {
    return (
      <SubscribeFooter>
        <h3>Thanks for subscribing! ✅</h3>
      </SubscribeFooter>
    )
  }

  return (
    <SubscribeFooter>
      <div>
        <SubscribeText>Want to hear more?</SubscribeText>
        <SubscribeForm onSubmit={handleSubmit}>
          <SubscribeInput
            type="text"
            onChange={handleChange}
            value={name}
            placeholder="Name"
            name="name"
          />
          <SubscribeInput
            type="text"
            onChange={handleChange}
            value={email}
            placeholder="Email"
            name="email"
          />
          <SubscribeButton type="submit" disabled={isLoading || isSuccessful}>
            Subscribe
          </SubscribeButton>
        </SubscribeForm>
      </div>
    </SubscribeFooter>
  )
}
