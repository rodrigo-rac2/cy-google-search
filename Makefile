generate-actionwords:
  hiptest-publisher --config-file=ht.config --actionwords-only

erase-reports:
  rm -rf cypress/reports 

erase-empty-scripts:
  rm -rf cypress/integration/**/*test.js

ci:
 # npx cypress run
  npm start

ci-with-hiptest:
  - make erase-tests
  - hiptest-publisher -c ht.config --only=tests --test-run-id=${test-run-id}
  - make erase-empty-scripts
  - make ci
  - hiptest-publisher -c ht.config --push="cypress/reports/*.xml" --test-run-id=${test-run-id}