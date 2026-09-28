"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react'

const VerifyAccountForm = () => {
    const searchParams = useSearchParams();

    const email = searchParams.get("email");
  return (
    <div>
      <h1>The email: {email}</h1>
    </div>
  )
}

export default VerifyAccountForm
