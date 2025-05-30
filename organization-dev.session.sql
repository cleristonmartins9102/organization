select loc.address from Organization as org 
  join Company as com on com.organizationId = org.id
  join Location as loc on loc.id = com.addressId
  join Store as sto on sto.companyId = com.id

