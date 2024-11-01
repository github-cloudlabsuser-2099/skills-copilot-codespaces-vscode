# Import the Azure module
Import-Module Az

# Authenticate to Azure
Connect-AzAccount

# Define parameters
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"
$skuName = "Standard_LRS"

# Create the resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create the storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind StorageV2 `
                     -Tags @{ environment = "staging" }