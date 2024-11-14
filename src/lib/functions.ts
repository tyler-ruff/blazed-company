export function formatTelephone(phoneNumber: string){
    // Remove the '+' and any non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned number has the correct length (11 digits for +Xxxxxxxxxxx)
    if (cleaned.length !== 11) {
        throw new Error('Invalid phone number length. Expected 11 digits.');
    }

    // Extract the country code and the rest of the number
    const countryCode = cleaned.charAt(0); // Assuming the first digit is the country code
    const localNumber = cleaned.slice(1); // The remaining 10 digits

    // Format the local number
    const areaCode = localNumber.slice(0, 3);
    const centralOfficeCode = localNumber.slice(3, 6);
    const lineNumber = localNumber.slice(6, 10);

    // Return the formatted number including the country code
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}