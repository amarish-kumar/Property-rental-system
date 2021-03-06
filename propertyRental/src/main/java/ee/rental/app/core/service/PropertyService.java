package ee.rental.app.core.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import ee.rental.app.core.model.Property;
import ee.rental.app.core.model.PropertyFacility;
import ee.rental.app.core.model.PropertyType;
import ee.rental.app.core.model.Review;
import ee.rental.app.core.model.wrapper.PropertyQueryWrapper;
import ee.rental.app.core.model.wrapper.PropertyWrapper;
import ee.rental.app.core.model.wrapper.ReviewWrapper;
import ee.rental.app.core.model.wrapper.UnavailableDatesForPublic;
import ee.rental.app.core.model.UnavailableDate;

public interface PropertyService {
	public Property findProperty(Long id);
	public List<Property> findPropertiesByOwner(String userAccount);
	public List<Property> queryProperties(PropertyQueryWrapper query);
	public List<PropertyType> findAllPropertyTypes();
	public Property addProperty(Property property);
	public List<PropertyFacility> findPropertyFacilities();
	public void updateProperty(Property property);
	public List<Review> findReviewsByPropertyId(Long id);
	public Review findReviewById(Long id);
	public Review addReview(ReviewWrapper review);
	public void deleteReview(Long id, String username);
}
