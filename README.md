# Mr. X's Property Development on Mars

This project addresses the problem of maximizing earnings through strategic property development on Mr. X's land in Mars Land. Given a specified period of time, the application determines the optimal mix of Theatres, Pubs, and Commercial Parks that Mr. X can build, along with their corresponding earnings.

## Problem Description

Mr. X can develop his land using three types of properties:

1. **Theatre**
   - **Time to build**: 5 units
   - **Land required**: 2x1 parcel
   - **Earnings**: $1500

2. **Pub**
   - **Time to build**: 4 units
   - **Land required**: 1x1 parcel
   - **Earnings**: $1000

3. **Commercial Park**
   - **Time to build**: 10 units
   - **Land required**: 3x1 parcel
   - **Earnings**: $3000 (houses 6 Commercial Spaces and 8 Screen Theatres)

Mr. X cannot develop two properties in parallel within the same time unit. After `n` units of time, the application computes the possible combinations of properties developed and their total earnings.

## Input/Output

- **Input**: A single integer representing the total time units available for development.
- **Output**: Possible combinations of developed properties and total earnings.

### Test Cases

1. **Test Case 1**
   - **Input**: `7`
   - **Earnings**: `$3000`
   - **Solutions**:
     - T: 1 P: 0 C: 0
     - T: 0 P: 1 C: 0

2. **Test Case 2**
   - **Input**: `8`
   - **Earnings**: `$4500`
   - **Solutions**:
     - T: 1 P: 0 C: 0

3. **Test Case 3**
   - **Input**: `13`
   - **Earnings**: `$16500`
   - **Solutions**:
     - T: 2 P: 0 C: 0

## How to Use the Application

1. Enter the total time units available for development in the input field.
2. Click **Calculate** to determine the possible combinations of properties and the corresponding earnings.
3. View the results displayed on the page.

### Live Demo

Access the live application here: [MaxiProfit](https://maxiprofit.netlify.app)
