// This file contains the main JavaScript functionality for the custom PC builder website.

document.addEventListener("DOMContentLoaded", () => {
    const pcBuilder = new PCBuilder();

    // Event listeners for user inputs
    document.getElementById("add-component").addEventListener("click", () => {
        const componentType = document.getElementById("component-type").value;
        const componentDetails = document.getElementById("component-details").value;
        pcBuilder.addComponent(componentType, componentDetails);
        updatePCConfiguration();
    });

    document.getElementById("calculate-cost").addEventListener("click", () => {
        const totalCost = pcBuilder.calculateTotalCost();
        document.getElementById("total-cost").innerText = `Total Cost: $${totalCost}`;
    });

    function updatePCConfiguration() {
        const configurationDisplay = document.getElementById("pc-configuration");
        configurationDisplay.innerHTML = pcBuilder.renderConfiguration();
    }
});