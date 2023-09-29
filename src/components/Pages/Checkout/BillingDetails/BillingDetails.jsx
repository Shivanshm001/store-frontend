import React, { useState } from 'react'
import { Input } from './Input/Input';



export function BillingDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phnNumber, setPhnNumber] = useState("");

  return (
    <div className='grid gap-4'>
      <div className='flex justify-between col-span-12'>
        <Input id={"firstName"} label={"First Name"} type={"text"} value={firstName} onChange={(e) => setFirstName(e.target.value)}
        />
        <Input id={"lastName"} label={"Last Name"} type={"text"} value={lastName} onChange={(e) => setLastName(e.target.value)}
        />
      </div>


      <div className='col-span-12'>
        <Input id={"companyName"} label={"Company Name"} type={"text"} value={companyName} onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>


      <div className='col-span-12'>
        <Input id={"country"} label={"Country"} type={"text"} value={country} onChange={(e) => setCountry(e.target.value)}
        />
      </div>


      <div className='col-span-12'>
        <Input id={"address"} label={"Address"} type={"text"} value={address} onChange={(e) => setAddress(e.target.value)}
        />
      </div>


      <div className='col-span-12'>
        <Input id={"postalCode"} label={"Postal / ZIP"} type={"text"} value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>


      <div className='col-span-12'>
        <Input id={"city"} label={"City / Town"} type={"text"} value={city} onChange={(e) => setCity(e.target.value)}
        />
      </div>


      <div className='col-span-12 flex justify-between'>
        <Input id={"email"} label={"Email"} type={"text"} value={email} onChange={(e) => setEmail(e.target.value)}
        />

        <Input id={"phnNumber"} label={"Phone"} type={"text"} value={phnNumber} onChange={(e) => setPhnNumber(e.target.value)}
        />
      </div>


    </div>
  )
}
