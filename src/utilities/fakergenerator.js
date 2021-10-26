import faker from 'faker'

export default function generateFakeData(n){
    faker.locale = "es"
    const fakeData = []
    for (let i = 0; i < n; i++){
        fakeData.push({
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: Math.floor(Math.random() * 60),
            address: faker.address.direction(),
            city: faker.address.cityName(),
            zipCode: faker.address.zipCode(),
            extra: faker.lorem.paragraph(),
            image: faker.image.avatar()
        })
    }
    return fakeData
}