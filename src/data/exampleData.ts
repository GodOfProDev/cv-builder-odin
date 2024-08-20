import Education from './education'
import Experience from './experience'
import PersonalInfo from './personalInfo'

export const examplePersonalInfoData = new PersonalInfo(
    'John Doe',
    'john.doe@example.com',
    '(123) 456-7890',
    '123 Main St, Anytown USA'
)

export const exampleEducationData = new Education(
    'University of Exampleton',
    'Bachelor of Science in Computer Science',
    '2015-08-01',
    '2019-05-15',
    'Exampleton, CA'
)

export const exampleExperienceData = new Experience(
    'Acme Corporation',
    'Software Engineer',
    '2019-06-01',
    '2022-03-31',
    'San Francisco, CA',
    'Made the software the company uses speed go up by 30%'
)
