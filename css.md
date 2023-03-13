/_ To center an item make sure to do 3 things _/

1. Display:Block;
2. set a width
3. margin-left:auto; margin-right:auto;

/_ Flex _/

1. Apply css display:flex to parent element
<div id="parent"> 
    <div id="child 1"> </div>
    <div id="child 1"> </div>
    <div id="child 1"> </div>
</div>

css = #parent{display:flex}

2. justify content how you want
        
css =  justify-content:
        center - centered
        start -  push to left
        end - push to right side
        space-around - available space around items
        space-between - available space between items
