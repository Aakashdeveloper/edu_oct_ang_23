import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HomeService } from './Home.service'

describe('Home Service',() => {
    let service: HomeService;
    let httpMock: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers:[HomeService]
        });
        service = TestBed.inject(HomeService);
        httpMock = TestBed.inject(HttpTestingController);
    })

    afterEach(() => {
        httpMock.verify()
    })

    it('Should be created',() => {
        expect(service).toBeTruthy()
    })


    it('Should get list of cities',() => {
        const mockCities = [
            {
                "_id": "6187738a62a1816f8858634e",
                "location_id": 4,
                "location_name": "Bibvewadi, Pune",
                "state_id": 2,
                "state": "Maharashtra",
                "country_name": "India"
              },
              {
                "_id": "6187738a62a1816f8858634d",
                "location_id": 1,
                "location_name": "Ashok Vihar Phase 3, New Delhi",
                "state_id": 1,
                "state": "Delhi",
                "country_name": "India"
              }
        ]

        service.getCityData().subscribe((cities) => {
            expect(cities).toEqual(mockCities)
        })
        
        const req = httpMock.expectOne(`${service.base_url}/location`);
        expect(req.request.method).toBe('GET')
        req.flush(mockCities)
    })


    it('Should get list of Meals',() => {
        const mockMeal = [
            {
                "_id": "6187761a62a1816f88593a4a",
                "mealtype_id": 2,
                "mealtype": "Lunch",
                "content": "Start your day with exclusive breakfast options",
                "meal_image": "https://i.ibb.co/8rPxkWP/lunch.jpg"
              },
              {
                "_id": "6187761a62a1816f88593a4b",
                "mealtype_id": 3,
                "mealtype": "Dinner",
                "content": "Start your day with exclusive breakfast options",
                "meal_image": "https://i.ibb.co/XjzPqYv/dinner.jpg"
            }
        ]

        service.getMeal().subscribe((meals) => {
            expect(meals).toEqual(mockMeal)
        })
        
        const req = httpMock.expectOne(`${service.base_url}/quickSearch`);
        expect(req.request.method).toBe('GET')
        req.flush(mockMeal)
    })
})