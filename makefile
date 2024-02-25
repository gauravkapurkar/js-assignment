docker :
	docker-compose down
	docker-compose build
	docker-compose up -d

.PHONY: docker