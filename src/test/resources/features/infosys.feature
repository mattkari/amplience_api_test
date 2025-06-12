Feature: Conduct interview

  Scenario: Conduct interview feature

# Create step definiton file for it. Implement how you can get values of each key.
    Then the user should find a domain event eventName in processFlowDefinitionId with originatingStatus, and resultingStatus, and globalStatus as below:
    | eventName                    | processFlowDefinitionId | originatingStatus                      | resultingStatus                        | globalStatus |
    | Flow Initiated               | DebtorPacs008FlowV1     | Initial                                | Duplicate Checking                     | PENDING      |
    | duplicateCheckPassed         | DebtorPacs008FlowV1     | Duplicate Checking                     | Message Validation                     | PENDING      |
    | messageValidationPassed      | DebtorPacs008FlowV1     | Message Validation                     | Determining Debit Account              | PENDING      |
    | debitAccountDetermined       | DebtorPacs008FlowV1     | Determining Debit Account              | CSM Reachability check                 | PENDING      |
    | csmReachabilityCheckPassed   | DebtorPacs008FlowV1     | CSM Reachability check                 | sanctions screening Checking Sanctions | PENDING      |
    | sanctionsScreeningFailed     | DebtorPacs008FlowV1     | sanctions screening Checking Sanctions | Flow Terminated                        | REJECTED     |
