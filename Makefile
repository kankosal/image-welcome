#Makefile

CI_REGISTRY          ?= ghcr.io
CI_PROJECT_NAMESPACE ?= kosalkan
CI_PROJECT_NAME      ?= image-welcome
CI_COMMIT_REF_NAME   ?= master

# image and tag
TAG=$(CI_COMMIT_REF_NAME)
IMG=$(CI_REGISTRY)/$(CI_PROJECT_NAMESPACE)/$(CI_PROJECT_NAME)

COMPOSE_PROJECT_NAME ?=$(CI_PROJECT_NAME)

build-app:
	@echo "build image for $(IMG)"
	docker build -t "$(IMG):$(TAG)" -f ./build/Dockerfile .
ifneq ($(TAG), master)
	docker tag "$(IMG):$(TAG)" "$(IMG):testing"
endif

build: build-app
	@echo "done building image for $(CI_PROJECT_NAME)"

push:
	docker push $(IMG):$(TAG)
ifneq ($(TAG), master)
	docker push $(IMG):testing
endif

tag-prod: build
	docker tag $(IMG):$(TAG) $(IMG):production
	docker push $(IMG):production

