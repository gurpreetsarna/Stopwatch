
class Node
{
    int data;
    Node left, right;
  
    public Node(int data)
    {
        this.data = data;
        left = right = null;
    }
}
  
class Tree
{
    Node root;
    Node head;
      
    
    static Node prev = null;
  
    
    void Convert(Node root)
    {
        
        if (root == null)
            return;
  
        Convert(root.left);
  
        if (prev == null)
            head = root;
        else
        {
            root.left = prev;
            prev.right = root;
        }
        prev = root;
  
        Convert(root.right);
    }
  
    
    void print(Node node)
    {
        while (node != null)
        {
            System.out.print(node.data + " ");
            node = node.right;
        }
    }
  
    public static void main(String[] args)
    {
        
        Tree tr = new Tree();
        tr.root = new Node(10);
        tr.root.left = new Node(12);
        tr.root.right = new Node(15);
        tr.root.left.left = new Node(25);
        tr.root.left.right = new Node(30);
        tr.root.right.left = new Node(36);
  
        tr.Convert(tree.root);
          
        tr.print(tree.head);
  
    }
}